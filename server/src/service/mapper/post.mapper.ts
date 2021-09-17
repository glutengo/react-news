import { Post } from '../../domain/post.entity';
import { PostDTO } from '../dto/post.dto';

/**
 * A Post mapper object.
 */
export class PostMapper {
    static fromDTOtoEntity(entityDTO: PostDTO): Post {
        if (!entityDTO) {
            return;
        }
        const entity = new Post();
        const fields = Object.getOwnPropertyNames(entityDTO);
        fields.forEach(field => {
            entity[field] = entityDTO[field];
        });
        return entity;
    }

    static fromEntityToDTO(entity: Post, excerptLength?: number): PostDTO {
        if (!entity) {
            return;
        }
        const entityDTO = new PostDTO();

        const fields = Object.getOwnPropertyNames(entity);

        fields.forEach(field => {
            if (field === 'content' && excerptLength) {
                entityDTO.excerpt = entity.content.substring(0, excerptLength);
            } else {
                entityDTO[field] = entity[field];
            }
        });

        return entityDTO;
    }
}
