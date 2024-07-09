export const getBase64 = (file: File) => {
    return new Promise<any>((resolve) => {
        let reader = new FileReader()

        reader.readAsDataURL(file)

        reader.onload = () => {
            resolve(reader.result)
        }
    })
}