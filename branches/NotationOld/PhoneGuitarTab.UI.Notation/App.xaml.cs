﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Reflection;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Navigation;
using System.Windows.Shapes;
using Microsoft.Phone.Controls;
using Microsoft.Phone.Shell;
using PhoneGuitarTab.UI.Notation.Infrastructure;
using PhoneGuitarTab.UI.Notation.Persistence;
using PhoneGuitarTab.UI.Notation.ViewModel;

namespace PhoneGuitarTab.UI.Notation
{
    public partial class App : Application
    {
        /// <summary>
        /// Provides easy access to the root frame of the Phone Application.
        /// </summary>
        /// <returns>The root frame of the Phone Application.</returns>
        public PhoneApplicationFrame RootFrame { get; private set; }

       
        /// <summary>
        /// Constructor for the Application object.
        /// </summary>
        public App()
        {
            // Global handler for uncaught exceptions. 
            UnhandledException += Application_UnhandledException;
#if DEBUG
            // Display the current frame rate counters.
            Application.Current.Host.Settings.EnableFrameRateCounter = true;
            MemoryDiagnosticsHelper.Start(true);
#endif
            // Show graphics profiling information while debugging.
            if (System.Diagnostics.Debugger.IsAttached)
            {
                // Display the current frame rate counters.
                //Application.Current.Host.Settings.EnableFrameRateCounter = true;

                // Show the areas of the app that are being redrawn in each frame.
                //Application.Current.Host.Settings.EnableRedrawRegions = true;

                // Enable non-production analysis visualization mode, 
                // which shows areas of a page that are being GPU accelerated with a colored overlay.
                //Application.Current.Host.Settings.EnableCacheVisualization = true;
            }

            // Standard Silverlight initialization
            InitializeComponent();

            // Phone-specific initialization
            InitializePhoneApplication();
        }

        // Code to execute when the application is launching (eg, from Start)
        // This code will not execute when the application is reactivated
        private void Application_Launching(object sender, LaunchingEventArgs e)
        {
        }

        // Code to execute when the application is activated (brought to foreground)
        // This code will not execute when the application is first launched
        private void Application_Activated(object sender, ActivatedEventArgs e)
        {
        }

        // Code to execute when the application is deactivated (sent to background)
        // This code will not execute when the application is closing
        private void Application_Deactivated(object sender, DeactivatedEventArgs e)
        {
        }

        // Code to execute when the application is closing (eg, user hit Back)
        // This code will not execute when the application is deactivated
        private void Application_Closing(object sender, ClosingEventArgs e)
        {
        }

        // Code to execute if a navigation fails
        private void RootFrame_NavigationFailed(object sender, NavigationFailedEventArgs e)
        {
            if (System.Diagnostics.Debugger.IsAttached)
            {
                // A navigation has failed; break into the debugger
                System.Diagnostics.Debugger.Break();
            }
        }

        // Code to execute on Unhandled Exceptions
        private void Application_UnhandledException(object sender, ApplicationUnhandledExceptionEventArgs e)
        {
            if (System.Diagnostics.Debugger.IsAttached)
            {
                // An unhandled exception has occurred; break into the debugger
                System.Diagnostics.Debugger.Break();
            }
        }

        #region Phone application initialization

        // Avoid double-initialization
        private bool phoneApplicationInitialized = false;

        // Do not add any additional code to this method
        private void InitializePhoneApplication()
        {
            if (phoneApplicationInitialized)
                return;

            // Create the frame but don't set it as RootVisual yet; this allows the splash
            // screen to remain active until the application is ready to render.
            RootFrame = new PhoneApplicationFrame();
            RootFrame.Navigated += CompleteInitializePhoneApplication;

            // Handle navigation failures
            RootFrame.NavigationFailed += RootFrame_NavigationFailed;

            // Ensure we don't initialize again
            phoneApplicationInitialized = true;
            InitAppSettings();
        }

        private static string _productVersion;
        public static string ProductVersion
        {
            get
            {
                if (String.IsNullOrEmpty(_productVersion))
                {
                    string name = typeof(App).Assembly.FullName;
                    AssemblyName asmName = new AssemblyName(name);
                    _productVersion = asmName.Version.ToString();
                    //_productVersion = System.Reflection.Assembly.GetExecutingAssembly().GetName().Version.ToString();
                }
                return _productVersion;
            }
        }


        private void InitAppSettings()
        {
            PageMapping<ViewModelBase>.InitMapping(new Dictionary<PageType, KeyValuePair<Uri, Lazy<ViewModelBase>>>
			{
                {
			    PageType.Startup, 
					new KeyValuePair<Uri, Lazy<ViewModelBase>>
					(
						new Uri("/StartupView.xaml", UriKind.Relative), 
						new Lazy<ViewModelBase>(() => new StartupViewModel())
					)
				},
				{
			    PageType.Collection, 
					new KeyValuePair<Uri, Lazy<ViewModelBase>>
					(
						new Uri("/CollectionView.xaml", UriKind.Relative), 
						new Lazy<ViewModelBase>(() => new CollectionViewModel())
					)
				},
				{
			    PageType.Settings, 
					new KeyValuePair<Uri, Lazy<ViewModelBase>>
					(
						new Uri("/SettingsView.xaml", UriKind.Relative), 
						new Lazy<ViewModelBase>(() => new SettingsViewModel())
					)
				},
                {
			    PageType.Search, 
					new KeyValuePair<Uri, Lazy<ViewModelBase>>
					(
						new Uri("/SearchView.xaml", UriKind.Relative), 
						new Lazy<ViewModelBase>(() => new SearchViewModel())
					)
				},
                {
			    PageType.Tab, 
					new KeyValuePair<Uri, Lazy<ViewModelBase>>
					(
						new Uri("/TabView.xaml", UriKind.Relative), 
						new Lazy<ViewModelBase>(() => new TabViewModel())
					)
				},
                {
			    PageType.TextTab, 
					new KeyValuePair<Uri, Lazy<ViewModelBase>>
					(
						new Uri("/TextTabView.xaml", UriKind.Relative), 
						new Lazy<ViewModelBase>(() => new TextTabViewModel())
					)
				},
                {
			    PageType.Group, 
					new KeyValuePair<Uri, Lazy<ViewModelBase>>
					(
						new Uri("/GroupView.xaml", UriKind.Relative), 
						new Lazy<ViewModelBase>(() => new GroupViewModel())
					)
				},
                 {
			    PageType.Help, 
					new KeyValuePair<Uri, Lazy<ViewModelBase>>
					(
						new Uri("/HelpView.xaml", UriKind.Relative), 
						new Lazy<ViewModelBase>(() => new HelpViewModel())
					)
				}

			});
        }

        // Do not add any additional code to this method
        private void CompleteInitializePhoneApplication(object sender, NavigationEventArgs e)
        {
            // Set the root visual to allow the application to render
            if (RootVisual != RootFrame)
                RootVisual = RootFrame;

            // Remove this handler since it is no longer needed
            RootFrame.Navigated -= CompleteInitializePhoneApplication;
            
            //added viewmodel to startup page
            PhoneApplicationPage view = e.Content as PhoneApplicationPage;
            if (view == null)
                return;
            view.DataContext = new ViewModel.StartupViewModel();
        }

        #endregion
    }
}