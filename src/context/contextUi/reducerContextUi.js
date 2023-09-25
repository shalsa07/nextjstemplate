export const INITIAL_UI_STATE={
    showInvoiceForm:false,
    showInvoice:false,
    showInvoiceList:true,
    showItemAdd:false,
    count:0,
    invoiceList:[],
    // billFromInputs:{
    //     streetAddress:'',
    //     city:'',
    //     province:'',
    //     country:'',
    //     issueDate:'',
    //     paymentTerms:'',
    //     projectDescription:'',
    // },
    // billToInputs:{
    //     streetAddress:'',
    //     city:'',
    //     province:'',
    //     country:'',
    // },
    // itemList:{
    //     itemName:'',
    //     quantity:'',
    //     price:'',
    //     total:'',
    // },
    // user:{
    //     username:'',
    //     email:'',
    //     password:'',
    // },
    // ItemDescriptio:'',
    // Quantity:'',
    // UnitCost:'',
    invoiceNumber:1,
    invoiceDate:'',
    dueDate:'',
    invoiceDesc:'',
    street:'',
    city:'',
    country:'',
    addressee:'',
    email:'',
    addresseeStreet:'',
    addresseeCity:'',
    addresseeCountry:'',
    invoiceAmount:'',
    itemTitle:'',
    quantity:1,
    unitPrice:0,
    invoiceTotal:0,
    status:'',
    
}

export const ACTIONS_UI_STATE={
    SHOW_INVOCE_FORM:'SHOW_INVOCE_FORM',
    HIDE_INVOCE_FORM:'HIDE_INVOCE_FORM',
    SHOW_ITEM_ADD_FORM:'SHOW_ITEM_ADD_FORM',
    HIDE_ITEM_ADD_FORM:'HIDE_ITEM_ADD_FORM',
    SHOW_INVOICE:'SHOW_INVOICE',
    HIDE_INVOICE:'HIDE_INVOICE',
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
        case 'SHOW_INVOICE':
            return{
                ...state,
                showInvoiceList:false,
                showInvoice:true
            }
        case 'HIDE_INVOICE':
            return{
                ...state,
                showInvoiceList:true,
                showInvoice:false
        }
        default:
           return state;
    }
}