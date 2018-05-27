import React from 'react'
import { Steps, Step } from 'html-indicator-steps'

export default props => (
    <Steps>
        <Step step={props.shipped} description="expedido" />
        <Step step={props.origin} description="saída origem" />
        <Step step={props.receiver} description="chegada destino" />
        <Step step={props.inTransport} description="em transporte" />
        <Step step={props.delivered} description="entregue" />
    </Steps>
)
