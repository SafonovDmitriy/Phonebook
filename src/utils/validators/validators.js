export const requiredFuild = value => {
    return value ? undefined : "Error: Empty field"
}

export const textOnly = value => {
    let error = false
    if (value) {
        value.split('').map(symbol => {
            return `1234567890-=!@#$%^&*()_+'"~/?.>,<;:}[{}]+${'`'}`.indexOf(symbol) !== -1 ? error = true : undefined
        })
        return error ? "Error: Forbidden Characters" : undefined
    }
}

export const onlyNumber = value => {
    let error = false
    if (value) {
        value.split('').map(symbol => {
            return !value||`1234567890`.indexOf(symbol) === -1 ? error = true : undefined
        })
        return error ? "Error: Forbidden Characters" : undefined
    }
}