export function notEmpty<T>(value: string | Array<T>) {

    const result =  Array.isArray(value) ? value.length !== 0 : value && value.trim()
    if(result) return true

    return 'Musisz podać wartość.'
}