import { BlogEntity, BlogService } from './../blog.servicce';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  test = `- Support for finding three classes Healthy people, finding people with Pneumonia and people with other pre-existing conditions : (URTI, Asthma, COPD, LRTI, Bronchiectasis, Bronchiolitis).
  - Support for four different audio recording devices :  AKG C417L Microphone,3M Littmann Classic II SE Stethoscope, 3M Litmmann 3200 Electronic Stethoscope, WelchAllyn Meditron Master Elite Electronic Stethoscope
  - Only requires age, gender,  and recording of the respitory cycle.

  # Respiratory ML Analysis

  <img src="http://www.myiconfinder.com/uploads/iconsets/256-256-abb3bbe6b838954823b5ee1519f2b8e9-cancer.png" class="img-fluid">

  # Setting up
  The model was made inside the [deepo docker image](https://imagehttps://hub.docker.com/r/ufoym/deepo/).

  The only things you need to be aware of  : <br>
  + You need three files for the Model Test.ipynb to work
      + "Respiratory_Sound_Database.zip" which is the our data
      + "output.zip" which is the processed data
      + "gl_after_np.csv" : information processed from the name of each recording : the latest version of this file is provided in the repository.
  + You will need the data set from [Kaggle](https://www.kaggle.com/vbookshelf/respiratory-sound-database). This data set has duplicates, inorder for the models to work please download the data, unzip and the zip it again, named as "Respiratory_Sound_Database.zip". Or to download it from google drive. wget provided in CD.sh.
  + After You have downloaded "Respiratory_Sound_Database.zip" you can generate both "gl_after_np.csv" and "output.zip" by :
      + runing "./data_set_up/data.py"
      + downloading them through github and google drive. Wget is provided inside the CD.sh.
  + All the externall libraries that are not provided inside the image can be installed using "requirements_set_up.sh"
  + The last step for testing the model is to set the "gpu_n" value to the number of gpus in "Model Test.ipynb".

  # Model
  The architecture of the model can be read at ./models but here is a general scheme of the model :
  <img src="https://i.imgur.com/LUPuhmp.png" class="img-fluid"><br>

  # Test result
  The Recall, Precision, and F1-Score for all the three classes have been measured and are as follows : <br>
  <img src="https://i.imgur.com/zlnhhlK.png" class="img-fluid"><br>
  <img src="https://i.imgur.com/Rmk9253.png" class="img-fluid"><br>
  <img src="https://i.imgur.com/0tT5ddk.png" class="img-fluid"><br>


  <br>

  The links for these graphs are available at plotly for further analysis: [Healthy](https://plotly.com/~unheardPlayer/30/#/), [Pneumonia](https://plotly.com/~unheardPlayer/32/#/), [Pre Existing Conditions](https://plotly.com/~unheardPlayer/34/#/).`;


  blogEntity : BlogEntity = new BlogEntity();

  constructor(private blogService: BlogService, private ref: ChangeDetectorRef) {
    this.blogEntity.markDown = '';
    blogService.getByID(2).subscribe(
      value => {
        this.blogEntity = value;
        console.log(this.blogEntity.markDown != '');
        console.log("markdown")
        console.log(this.blogEntity.markDown == this.test);
        console.log(this.blogEntity.markDown);
        console.log("test")
        console.log(this.test);
        this.ref.detectChanges();
      },
      err => {
        console.log('error in recieving the blog post');
      }
    );
  }

  ngOnInit(): void {}
}
