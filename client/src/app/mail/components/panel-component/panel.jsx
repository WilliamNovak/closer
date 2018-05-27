import React from 'react'
import { Card } from 'html-component'
import { Row, Column } from 'html-grid'
import { Link } from 'react-router'
import Icon from 'html-icon'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Collapsible from 'react-collapsible'
import './styles.css'

const MailPanelCategory = props => {
    const { mail, category } = props
    return (
        <div>
            {
                mail && mail.map(
                    c => (
                        c.category_id === category &&
                        <div key={"mail-panel-title-id-" + c.id + '-' + c.category_id}>
                            <Collapsible transitionTime={100} trigger={c.name}>
                                <div className="title-base" />
                                {c.description}
                                <br /><br />
                                <Link className="btn btn-small btn-outline-primary" to="#">
                                    <Icon name="ticket" /> abrir chamado
                                </Link>
                            </Collapsible>
                        </div>
                    )
                )
            }
        </div>
    )
}

export default props => {

    const mailData = props.mail.data
    const mailCategories = props.mail.categories

    return (


            <Tabs>
                <Row>
                <Column mobile={12} tablet={12} desktop={4}>
                    <TabList className="tab-list">
                        { mailCategories && mailCategories.map(fc => <Tab className="tab-item" selectedClassName="is-active" key={"support-mail-tab-category-id-" + fc.id}>{fc.name}</Tab>) }
                    </TabList>
                </Column>
                <Column mobile={12} tablet={12} desktop={8}>
                    {
                        mailCategories && mailCategories.map(
                            fc =>
                            <TabPanel className="tab-panel" key={"support-mail-panel-category-id-" + fc.id}>
                                {<MailPanelCategory mail={mailData} category={fc.id} />}
                            </TabPanel>
                        )
                    }
                </Column>
                </Row>
            </Tabs>

    )
}
