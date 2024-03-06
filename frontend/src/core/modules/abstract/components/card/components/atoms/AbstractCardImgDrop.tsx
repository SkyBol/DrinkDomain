import {useCallback, useState} from 'react';
import { useDropzone } from 'react-dropzone';

type AbstractDropDownParams = {
    id: string;
    formik: any;
};

const AbstractCardImgDrop = ({ id,formik }: AbstractDropDownParams) => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
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
                isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Platzieren Sie ihr Bild hier</p>
            }
            {/* Container for displaying the uploaded liquor image */}
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
