import { IonApp, IonRouterOutlet, IonSplitPane, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonItem, IonLabel, IonFooter, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Ionic Dark Mode */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

/* Tailwind CSS */
import './index.css'; // Asegúrate de importar Tailwind CSS

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <IonHeader className="bg-indigo-600 p-4">
              <IonToolbar>
                <IonTitle className="text-white text-3xl">Mi Aplicación Ionic</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent className="bg-gray-100 flex flex-col items-center justify-center p-5">
              <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-bold text-center mb-4">Iniciar Sesión</h2>
                <IonItem>
                  <IonLabel position="floating">Correo Electrónico</IonLabel>
                  <IonInput type="email" />
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">Contraseña</IonLabel>
                  <IonInput type="password" />
                </IonItem>
                <IonButton expand="full" className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white">
                  Iniciar Sesión
                </IonButton>
              </div>
            </IonContent>
            <IonFooter className="bg-indigo-600 p-4">
              <p className="text-white text-center">© 2024 Mi Aplicación. Todos los derechos reservados.</p>
            </IonFooter>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
