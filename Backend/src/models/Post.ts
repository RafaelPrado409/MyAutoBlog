import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import Image from './ImagePost';
import User from './User';

@Entity('posts')
export default class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  body: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Image, image => image.post, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'post_id' })
  images: Image[];

  @ManyToOne(() => User, user => user.post)
  @JoinColumn({ name: 'user_id' })
  user_id: User;
}
