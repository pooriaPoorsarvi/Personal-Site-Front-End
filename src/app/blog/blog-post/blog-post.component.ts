import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { BlogEntity, BlogService } from './../blog.servicce';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  test = `<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci ac auctor augue mauris. In vitae turpis massa sed elementum tempus egestas. Arcu risus quis varius quam quisque id diam vel. Vitae congue eu consequat ac felis donec. Venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam. Dolor purus non enim praesent elementum. In dictum non consectetur a erat nam at. Sit amet mauris commodo quis imperdiet massa. Varius duis at consectetur lorem donec massa sapien faucibus. Nec dui nunc mattis enim ut tellus elementum. Integer feugiat scelerisque varius morbi enim nunc. Est placerat in egestas erat imperdiet sed euismod. Purus in mollis nunc sed id. Luctus accumsan tortor posuere ac ut consequat semper. A lacus vestibulum sed arcu non odio euismod. Quis vel eros donec ac odio tempor.
</p>
<blockquote>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci ac auctor augue mauris. In vitae turpis massa sed elementum tempus egestas. Arcu risus quis varius quam quisque id diam vel. Vitae congue eu consequat ac felis donec. Venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam. Dolor purus non enim praesent elementum. In dictum non consectetur a erat nam at. Sit amet mauris commodo quis imperdiet massa. Varius duis at consectetur lorem donec massa sapien faucibus. Nec dui nunc mattis enim ut tellus elementum. Integer feugiat scelerisque varius morbi enim nunc. Est placerat in egestas erat imperdiet sed euismod. Purus in mollis nunc sed id. Luctus accumsan tortor posuere ac ut consequat semper. A lacus vestibulum sed arcu non odio euismod. Quis vel eros donec ac odio tempor.
</blockquote>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci ac auctor augue mauris. In vitae turpis massa sed elementum tempus egestas. Arcu risus quis varius quam quisque id diam vel. Vitae congue eu consequat ac felis donec. Venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam. Dolor purus non enim praesent elementum. In dictum non consectetur a erat nam at. Sit amet mauris commodo quis imperdiet massa. Varius duis at consectetur lorem donec massa sapien faucibus. Nec dui nunc mattis enim ut tellus elementum. Integer feugiat scelerisque varius morbi enim nunc. Est placerat in egestas erat imperdiet sed euismod. Purus in mollis nunc sed id. Luctus accumsan tortor posuere ac ut consequat semper. A lacus vestibulum sed arcu non odio euismod. Quis vel eros donec ac odio tempor.
</p>`;

  blogEntity: BlogEntity = new BlogEntity();
  private id: string;

  constructor(private blogService: BlogService, private ref: ChangeDetectorRef, private route: ActivatedRoute) {
    this.blogEntity.markDownSrc = '';
    this.id = this.route.snapshot.params.id;
    this.getIndividualParam();

    this.route.params.subscribe(
      (params: Params) => {
        this.id = params.id;
        this.getIndividualParam();
      }
    );

  }

  getIndividualParam(){

    const sub: Subscription = this.blogService.getByID(this.id).subscribe(
      value => {
        this.blogEntity = value;
        this.ref.detectChanges();
        sub.unsubscribe();
      },
      err => {
        console.log('error in recieving the blog post');
        sub.unsubscribe();
      }
    );
  }

  ngOnInit(): void {}
}
