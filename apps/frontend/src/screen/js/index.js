formElement = document.createElement('div')
formElement.setAttribute('class','form-penjualan')
formElement.style.display = 'grid'
formElement.style.gap = '10px'

dict = [
    {
        'sender_name': 'PT. MAJU SENDIRI',
        'sender_addr': 'Jalan Garuda Sakti no12',
        'reciever_name': 'PT. MAJU BERSAMA',
        'reciever_addr': 'Jalan Rambutan no192',
        'send_date': '01/02/2024',
        'po_number': '24705779',
        'do_number': '2024/08/0299',
        'npwp': '12.813.231.0-239.000',
        'disc': 0,
        'tax': 0.10,
        'items': [
            {
                'part_no': 'awe-qet-qwe-000-00-00123',
                'goods_name': 'spoon',
                'qty': '100',
                'price': 12000,
            },
            {
                'part_no': 'awe-qet-qwe-000-00-00111',
                'goods_name': 'fork',
                'qty': '10',
                'price': 11000,
            },
            {
                'part_no': 'awe-qet-qwe-000-00-00148',
                'goods_name': 'table',
                'qty': '30',
                'price': 123000,
            }
        ]
    }
]

class Profile{
    constructor(name, address, tax_id, warehouse, phone_num){
        data.name = name,
        this.address = address,
        this.tax_id = tax_id,
        this.warehouse = warehouse,
        this.phone_num = phone_num
    }
}

class PurchaseOrder{
    constructor(sender_name,order_date,order_number,tax_id,disc,tax,Profile,Items=[]){
        this.sender_name = sender_name,
        this.order_date = order_date,
        this.order_number = order_number,
        this.tax_id = tax_id,
        this.disc = disc,
        this.tax = tax,
        this.Profile = Profile,
        this.Items = Items
    }
}


function createField(id, pch) {
    return {
        'type': 'input',
        'props': {
            class: 'form-input',
            id: id,
            placeholder: pch,
        }
    }
}

lsof_field = [
    createField('','alamat')
]


for (let i = 0; i < 10; i++) {    
    inputElement = document.createElement('input')
    inputElement.setAttribute('class','form-input '+i)
    inputElement.style.gridRowStart = i
    inputElement.style.gridColumnStart = 3
    formElement.appendChild(inputElement)
}

rootElement = document.querySelector('#root').appendChild(formElement)