import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostRepository } from './repositories/post.repository';
import { NotFoundError } from 'src/common/errors/types/NotFoundError';

@Injectable()
export class PostService {
  constructor(private readonly postRepository: PostRepository) {}

  create(createPostDto: CreatePostDto) {
    return this.postRepository.create(createPostDto);
  }

  findAll() {
    return this.postRepository.findAll();
  }

  findOne(id: number) {
    const post = this.postRepository.findOne(id);
    if (!post) {
      throw new NotFoundError('Post não encontrado');
    }
    return post;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return this.postRepository.update(id, updatePostDto);
  }

  remove(id: number) {
    return this.postRepository.remove(id);
  }
}
