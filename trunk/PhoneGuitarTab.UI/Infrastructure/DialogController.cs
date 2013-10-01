﻿
namespace PhoneGuitarTab.UI.Infrastructure
{
    using System.Windows;

    /// <summary>
    /// Incapsulates underlying dialog API
    /// </summary>
    public interface IDialogController
    {
        void Show(string title, string message);
        void Show(string message);
    }

    /// <summary>
    /// Uses  built-in MessageBox to display messages
    /// </summary>
    public class DefaultDialogController : IDialogController
    {
        public void Show(string title, string message)
        {
            MessageBox.Show(title, message, MessageBoxButton.OK);
        }

        public void Show(string message)
        {
            MessageBox.Show(message);
        }
    }
}
