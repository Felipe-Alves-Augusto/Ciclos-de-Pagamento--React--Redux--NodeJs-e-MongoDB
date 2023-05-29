import React, { useEffect, useState } from "react";
import ContentHeader from "../common/template/ContentHeader";
import Content from "../common/template/Content";
import Tabs from '../common/tab/Tabs';
import TabsHeader from '../common/tab/TabsHeader';
import TabsContent from '../common/tab/TabsContent';
import TabHeader from "../common/tab/TabHeader";
import TabContent from "../common/tab/TabContent";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// import { selectTab, showTabs } from "../common/tab/tabActions";
import BillingCyclesList from "./BillingCycleList";
import BillingCycleForm from "./BillingCycleForm";
import { create, update, deleteCycle, init } from "./BillingCycleActions";


const BillingCycle = (props) => {

    
    useEffect(() => {
        props.init();

    }, [])
    
    return (
        <div>
            <ContentHeader title="Ciclos de Pagamentos" small="Cadastro"></ContentHeader>
            <Content>
                <Tabs>
                    <TabsHeader>
                        <TabHeader label="Listar" icon="bars" target="tabList"></TabHeader>
                        <TabHeader label="Incluir" icon="plus" target="tabCreate"></TabHeader>
                        <TabHeader label="Alterar" icon="pencil" target="tabUpdate"></TabHeader>
                        <TabHeader label="Excluir" icon="trash-o" target="tabDelete"></TabHeader>
                    </TabsHeader>
                    
                    <TabsContent>
                        <TabContent id="tabList">
                            <BillingCyclesList></BillingCyclesList>
                        </TabContent>

                        <TabContent id="tabCreate">
                            <BillingCycleForm buttonClass="primary" textButton="Incluir" onSubmit={props.create}></BillingCycleForm>
                        </TabContent>

                        <TabContent id="tabUpdate">
                            <BillingCycleForm buttonClass="warning" textButton="Editar" onSubmit={props.update}></BillingCycleForm>
                        </TabContent>

                        <TabContent id="tabDelete">
                            <BillingCycleForm buttonClass="danger" readOnly={true} textButton="Deletar" onSubmit={props.deleteCycle}></BillingCycleForm>
                        </TabContent>

                    </TabsContent>
                </Tabs>
            </Content>
        </div>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({create, update, deleteCycle, init}, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycle);