# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

{
    'name': 'Example owl example',
    'version': '1.0',
    'category': 'Custom module',
    'summary': 'IDK',
    'depends': [
        'purchase',
    ],

    'data': [
        'views/purchase_order_view.xml',
    ],

    'assets': {
        'web.assets_backend': [
            'fv_test_example/static/src/js/CustomTemplatePurchaseForm.js',
            'fv_test_example/static/src/scss/CustomTemplatePurchaseForm.scss',
        ],

       'web.assets_qweb':[
            'fv_test_example/static/src/xml/CustomTemplatePurchaseForm.xml',
    ],
        
    },
   
    
   
  
    
    'installable': True,
    'auto_install': False,
    'license': 'LGPL-3',
}
