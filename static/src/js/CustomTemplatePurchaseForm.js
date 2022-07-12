odoo.define("fv_test_example.CustomTemplatePurchaseForm", function (require) {
    const FormRenderer = require("web.FormRenderer");
    const {Component} = owl;
    const {ComponentWrapper} = require("web.OwlCompatibility");
    const { useState } = owl.hooks;
    
    
  
    /** 
     * OWL component responsible for displaying a partner order summary widget 
     * which will show order history details about a specific customer. 
     */ 
    
    class CustomTemplatePurchaseForm extends Component { 
        state = useState({ text: "" });

        _updateInputValue(event) {
            this.state.text = event.target.value;
        }
        
        onTogglerClick(ev) {
            alert(ev.target.outerText + ' randomada proyecto zzz')
        }
        
    }; 
 
    /** 
     * Register properties to our widget. 
     */ 
    Object.assign(CustomTemplatePurchaseForm, {
        template: "fv_test_example.CustomTemplatePurchaseForm"
    }); 

 
 
    /** 
     * Override the form renderer so that we can mount the component on render 
     * to any div with the class o_partner_order_summary. 
     */ 
    FormRenderer.include({
        async _renderView() {
            await this._super(...arguments);
 
            for (const element of this.el.querySelectorAll(".o_fvf_custom_template_purchase_form")) { 
                (new ComponentWrapper(this, CustomTemplatePurchaseForm)) 
                    .mount(element) 
            } 
        }
    });
});

