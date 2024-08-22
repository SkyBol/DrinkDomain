import {useCallback} from 'react';
import { useDropzone } from 'react-dropzone';
import ImageService from '../../../../../../../domain/modules/bootle/services/ImageService';

type AbstractDropDownParams = {
    id: string;
    formik: any;
};

const AbstractCardImgDrop = ({ id, formik }: AbstractDropDownParams) => {
    const image: string = formik.values[id]

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file  = acceptedFiles[0];

        ImageService.save(file)
            .then(({data: {id: savedImageId}}) => {
                formik.setFieldValue(id, savedImageId)
            });
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
                isDragActive && image?
                    <p>Genau so!</p> :
                    <p>Platzieren Sie ihr Bild hier</p>
            }
            {image && (
                <img
                    src={image && ImageService.imageUrl(image)}
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
