import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import Post from './Post';

@Entity('images_posts')
export default class ImagePost {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  path: string;

  @ManyToOne(() => Post, post => post.images)
  @JoinColumn({ name: 'post_id' })
  post: Post;
}
