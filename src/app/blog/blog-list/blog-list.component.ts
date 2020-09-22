import { BlogEntity, BlogService } from './../blog.servicce';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogEntities: BlogEntity[] = [];

  constructor(
    public router: Router,
    private blogService: BlogService,
    private loadingController: LoadingController
    ) {
    this.loadingController.create({message: 'Getting Blog Posts, Please Wait :D'}).then(
      loader => {
        loader.present();
        this.getBlogPosts();
      }
    );
  }

  getBlogPosts(){
    this.blogService.getAll().subscribe(
      value => {
        this.blogEntities = value;
        this.loadingController.dismiss();
      },
      err => {
        console.log('Error in recieving the blog posts.');
        console.log(err);
      }
    );
  }

  ngOnInit(): void {}
  navigateToPost(id: number){
    this.router.navigate(['blog', 'blog-post', String(id)]);
  }


  // TODO fix this function if you wanna show error
  showError(){
    this.loadingController.dismiss().then(
      _ => this.loadingController.create({message: 'Sorry but could not retrieve blog posts!'}).then(
        __ => this.loadingController.dismiss()
      )
    );
  }

}
