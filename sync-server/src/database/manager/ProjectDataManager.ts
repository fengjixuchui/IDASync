import { ProjectData } from './../ProjectData';

import { BaseCollectionManager } from './BaseCollectionManager';
import { Collection, ObjectID } from 'mongodb';
import { Db } from 'mongodb';

export class ProjectDataManager extends BaseCollectionManager {
    public constructor() {
        super();

        this.collectionName = "projects";
    }

    public findByMd5(md5_hash:string):Promise<ProjectData> {
        var query = { binary_md5: md5_hash };
        return this.collection.findOne(query);
    }

    public create(project:ProjectData) {
        return new Promise<ObjectID>((resolve, reject) =>
             this.collection.insertOne(project)
             .then(result => resolve(result.insertedId))
             .catch(reason => reject(reason))
        );
    }

    public update(project:ProjectData) {
        return this.collection.updateOne({ _id: project._id }, project);
    }
}