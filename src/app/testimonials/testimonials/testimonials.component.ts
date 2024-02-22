import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TopbarService } from '../../topbar/topbar.service';
import { Post } from '../../cards/interfaces/post.interface';

@Component({
  selector: 'cfr-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  testimonialId: string | null = '';
  topbarServiceSub: Subscription;
  updatedPost: Post;
  constructor(private route: ActivatedRoute,
              private topbarService: TopbarService) {}

  ngOnInit(): void {
    // console.log('Testimonials component started');
    this.testimonialId = this.route.snapshot.paramMap.get('testimonialId');
    this.topbarServiceSub = this.topbarService.getLastPost$().subscribe(
        newPost => {
          this.updatedPost = newPost;
          console.log(this.updatedPost)
      });
  }

  ngOnDestroy(): void {
    this.topbarServiceSub.unsubscribe();
  }
}
