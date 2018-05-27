import React from 'react'
import { Card } from 'html-component'
import { Row, Column } from 'html-grid'
import { Link } from 'react-router'
import Icon from 'html-icon'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Collapsible from 'react-collapsible'
import './styles.css'

const FaqPanelCategory = props => {
    const { faq, category } = props
    return (
        <div>
            {
                faq && faq.map(
                    c => (
                        c.category_id === category &&
                        <div key={"faq-panel-title-id-" + c.id + '-' + c.category_id}>
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

    const faqData = props.faq.data
    const faqCategories = props.faq.categories

    return (


            <Tabs>
                <Row>
                <Column mobile={12} tablet={12} desktop={4}>
                    <TabList className="tab-list">
                        { faqCategories && faqCategories.map(fc => <Tab className="tab-item" selectedClassName="is-active" key={"support-faq-tab-category-id-" + fc.id}>{fc.name}</Tab>) }
                    </TabList>
                </Column>
                <Column mobile={12} tablet={12} desktop={8}>
                    {
                        faqCategories && faqCategories.map(
                            fc =>
                            <TabPanel className="tab-panel" key={"support-faq-panel-category-id-" + fc.id}>
                                {<FaqPanelCategory faq={faqData} category={fc.id} />}
                            </TabPanel>
                        )
                    }
                </Column>
                </Row>
            </Tabs>

    )
}
