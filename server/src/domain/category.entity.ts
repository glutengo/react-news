/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, Column, JoinColumn, OneToOne, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { BaseEntity } from './base/base.entity';

import { Post } from './post.entity';

/**
 * A Category.
 */
@Entity('category')
export class Category extends BaseEntity {
    @Column({ name: 'name', nullable: true })
    name: string;

    @OneToMany(
        type => Post,
        other => other.category,
    )
    posts: Post[];

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}
