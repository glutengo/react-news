/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiModelProperty } from '@nestjs/swagger';
import { BaseDTO } from './base.dto';

import { PostDTO } from './post.dto';

/**
 * A CategoryDTO object.
 */
export class CategoryDTO extends BaseDTO {
    @ApiModelProperty({ description: 'name field', required: false })
    name: string;

    @ApiModelProperty({ type: PostDTO, isArray: true, description: 'posts relationship' })
    posts: PostDTO[];

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}
