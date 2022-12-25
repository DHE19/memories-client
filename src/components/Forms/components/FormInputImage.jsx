import FileBase from 'react-file-base64'


const FormInputImage= ({setValue}) => {
    return (
        <div className='my-3'>
            <FileBase
            type="file"
            multiple ={false}
            onDone ={({base64}) => setValue(base64)}
            />
        </div>
    )
}

export default FormInputImage
