﻿using Microsoft.Phone.Controls;
using System.Windows.Controls;
using System.Windows.Data;
using PhoneGuitarTab.UI.ViewModel;
using Microsoft.Phone.Shell;
namespace PhoneGuitarTab.UI.Pivots
{
    public partial class Search : PivotItem
    {
        public Search()
        {
            InitializeComponent();

            var viewModel = DataContext as SearchViewModel;
            viewModel.PropertyChanged += viewModel_PropertyChanged;
         

        }

        private void viewModel_PropertyChanged(object sender, System.ComponentModel.PropertyChangedEventArgs e)
    {
        if (e.PropertyName == "SelectedPage")
        {        
              this.tabsFadeIn.Begin();
               
        }
 	  
    }

        private void OnSearchTextBoxTextChanged(object sender, TextChangedEventArgs e)
        {
            TextBox textBox = sender as TextBox;
            // Update the binding source
            BindingExpression bindingExpr = textBox.GetBindingExpression(TextBox.TextProperty);
            bindingExpr.UpdateSource();
            var viewModel = DataContext as SearchViewModel;
            viewModel.CurrentTypedText = textBox.Text;
           
        }

      
    }
}
