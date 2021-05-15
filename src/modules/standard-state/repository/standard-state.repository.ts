import { EntityRepository, Repository } from 'typeorm';

import { StandardState } from '../entity/standard-state.entity';

@EntityRepository(StandardState)
export class StandardStateRepository extends Repository<StandardState> {}
