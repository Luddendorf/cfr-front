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
    this.testimonialId = this.route.snapshot.paramMap.get('testimonialId');
    this.topbarServiceSub = this.route.params.subscribe(params => {
      this.updatedPost = {userId: params['userId'], id: params['id'],
        title: params['title'], body: params['body'] };
    });
  }

  ngOnDestroy(): void {
    this.topbarServiceSub.unsubscribe();
  }
}
