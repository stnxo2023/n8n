import { getFullApiResponse } from '@n8n/rest-api-client';
import type { IRestApiContext } from '@n8n/rest-api-client';

import { type DataStoreEntity } from '@/features/dataStore/datastore.types';

export const fetchDataStores = async (
	context: IRestApiContext,
	projectId?: string,
	options?: {
		page?: number;
		pageSize?: number;
	},
) => {
	return await getFullApiResponse<DataStoreEntity[]>(context, 'GET', '/data-stores', {
		projectId,
		options,
	});
};
