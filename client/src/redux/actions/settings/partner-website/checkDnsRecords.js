export const checkDnsRecords = (value, domain) => {

    let ans = false

    for(let i=0; i< value.length; i++) {
        console.log(value[i])
        if(value[i].name === domain + '.' && value[i].data === 'bodinga.com'){
            ans = true 
            break
        }
    }

    return ans 
}