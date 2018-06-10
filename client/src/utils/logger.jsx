import moment from 'moment'

export const logger = (message, props = false) => {
    let prefix = '%c' + moment().format("HH:mm:ss") + ' =>'
    if (!props) {
        props = false
    }
    console.log(prefix + '%c ' + message, 'color: blue', 'color: orange')
    if (props) {
        console.log(props)
    }
}
