import {useCallback, useEffect, useState} from 'react';
import { useDropzone } from 'react-dropzone';

type AbstractDropDownParams = {
    id: string;
    image?: File|null;
    formik: any;
};

const AbstractCardImgDrop = ({ id,image,formik }: AbstractDropDownParams) => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);


    useEffect(() => {
        if(image) {
            setImageUrl(`http://localhost:8081/storage/${(image as any).path}`)
        }
    }, [image]);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file  = acceptedFiles[0];
        const reader = new FileReader();


        reader.onload = () => {
            const fileName = reader.result as string;
            setImageUrl(fileName);
            formik.setFieldValue(id, file)
        };

        reader.readAsDataURL(file);
    }, []);

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

    return (
        <div {...getRootProps()} style={{
            border: '1px dashed black',
            width: 200,
            height: 250,
            backgroundColor: "lightgray",
            position: 'relative',
        }}>
            <input {...getInputProps()} />
            {
                isDragActive && imageUrl?
                    <p>Genau so!</p> :
                    <p>Platzieren Sie ihr Bild hier</p>
            }
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt="Uploaded Liquor Image"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                    }}
                />
            )}
        </div>
    );
};


export default AbstractCardImgDrop;
