import {
  Component
} from '@angular/core';
import {
  NavController,
  NavParams
} from 'ionic-angular';
import {
  Camera,
  CameraOptions
} from '@ionic-native/camera';
import {
  SpeechRecognition, SpeechRecognitionListeningOptions
} from '@ionic-native/speech-recognition';
import { Dialogs } from '@ionic-native/dialogs';

@Component({
  selector: 'recipes-new',
  templateUrl: 'recipes-new.html'
})
export class RecipesNewPage {
  newRecipe: {
    name: string,
    index: any,
    ingredients: Array < {
      name: string,
      amount: any,
      unit: string
    } >
  };

  parentScr: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private speechRecognition: SpeechRecognition, private dialogs: Dialogs) {
    this.newRecipe = {
      index: 0,
      name: '',
      ingredients: []
    }
    this.parentScr = navParams.get("recipesL");
  }

  newPictureIngredient() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.newRecipe.ingredients.push({
        name: 'Harina',
        amount: '3',
        unit: 'taz'
      });
      this.newRecipe.ingredients.push({
        name: 'Huevos',
        amount: '2',
        unit: 'unid'
      });
    }, (err) => {
      // Handle error
    });
  }

  newVoiceIngredient() {
    const options: SpeechRecognitionListeningOptions = {
      language: "es-ES",
      matches: 5,
      prompt: "Por favor, dicte los ingredientes de la receta",
      showPopup: true
    };

    this.speechRecognition.isRecognitionAvailable()
  .then((available: boolean) => {
    if (available) {
      this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {
        if (hasPermission) {
          this.speechRecognition.startListening(options)
          .subscribe(
            (matches: Array < string > ) => alert(matches),
            (onerror) => console.log('error:', onerror)
          );
        }
        else {
          this.speechRecognition.requestPermission()
          .then(
            () => {
              this.speechRecognition.startListening(options)
              .subscribe(
                (matches: Array < string > ) => {
                  this.newRecipe.ingredients.push({
                    name: 'Harina',
                    amount: '3',
                    unit: 'taz'
                  });
                  this.newRecipe.ingredients.push({
                    name: 'Huevos',
                    amount: '2',
                    unit: 'unid'
                  });
                  console.log(matches);
                },
                (onerror) => console.log('error:', onerror)
              );
            },
            () => console.log('Denied')
          )
        }
      });
    }
  });


    
  }

  goBack() {
    this.navCtrl.pop();
  }

  newIngredient() {
    this.newRecipe.ingredients.push({
      name: '',
      amount: '',
      unit: 'grs'
    });
  }

  removeIngredient(item) {
    var indexTBRemoved = this.newRecipe.ingredients.indexOf(item);
    if (-1 != indexTBRemoved) {
      this.newRecipe.ingredients.splice(indexTBRemoved, 1);
    }
  }

  saveRecipe() {
    this.newRecipe.index = this.parentScr.items.length;
    var tail = sessionStorage.getItem("newRecipes");
    if (tail == null) {
      var arrayX = [];
      arrayX.push(this.newRecipe);
      sessionStorage.setItem("newRecipes",JSON.stringify(arrayX));
    }
    else {
      var tailToArray = JSON.parse(tail);
      tailToArray.push(this.newRecipe);
      sessionStorage.setItem("newRecipes",JSON.stringify(tailToArray));
    }
    this.parentScr.items.push(this.newRecipe);
    this.dialogs.alert("Se ha creado la receta correctamente","Receta Agregada","Aceptar");
    this.navCtrl.pop();
  }
}
