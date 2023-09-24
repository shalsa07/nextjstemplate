export const INITIAL_UI_STATE={
    showInvoiceForm:false,
    showItemAdd:false,
    invoiceList:[],
    billFromInputs:{
        streetAddress:'',
        city:'',
        province:'',
        country:'',
        issueDate:'',
        paymentTerms:'',
        projectDescription:'',
    },
    billToInputs:{
        streetAddress:'',
        city:'',
        province:'',
        country:'',
    },
    itemList:{
        itemName:'',
        quantity:'',
        price:'',
        total:'',
    },
    ItemDescriptio:'',
    Quantity:'',
    UnitCost:'',
}

export const ACTIONS_UI_STATE={
    SHOW_INVOCE_FORM:'SHOW_INVOCE_FORM',
    HIDE_INVOCE_FORM:'HIDE_INVOCE_FORM',
    SHOW_ITEM_ADD_FORM:'SHOW_ITEM_ADD_FORM',
    HIDE_ITEM_ADD_FORM:'HIDE_ITEM_ADD_FORM',
    SAVE_DRAFT:'SAVE_DRAFT',
    SAVE_AND_EMAIL:'HIDE_ITEM_ADD_FORM',
}

export const reducerUi=(state,action)=>{
    switch (action.type) {
        case 'SHOW_INVOCE_FORM':
            return{
                ...state,
                showInvoiceForm:true
            }
        case 'HIDE_INVOCE_FORM':
            return{
                ...state,
                showInvoiceForm:false
            }
        case 'SHOW_ITEM_ADD_FORM':
            return{
                ...state,
                showItemAdd:true
            }
        case 'HIDE_ITEM_ADD_FORM':
            return{
                ...state,
                showInvoiceForm:false,
                showItemAdd:false
            }
        default:
           return state;
    }
}