import { BasePacket } from "./BasePacket";
import { PacketType } from "./PacketType";
import { NetworkBuffer } from "../NetworkBuffer";
import { IdbUpdatePacket } from "./IdbUpdatePacket";


export class UpdateOperationStartPacket extends BasePacket {
    public numUpdates: number;

    public constructor() {
        super();

        this.packetType = PacketType.UpdateOperationStart;
    }

    public encode(buffer: NetworkBuffer) {
        super.encode(buffer);

        buffer.writeUInt32(this.numUpdates);
    }

    public decode(buffer: NetworkBuffer) {
        super.decode(buffer);

        this.numUpdates = buffer.readUInt32();
    }
}

export class UpdateOperationProgressPacket extends BasePacket {
    public numUpdatesSynced: number;

    public constructor() {
        super();

        this.packetType = PacketType.UpdateOperationProgress;
    }

    public encode(buffer: NetworkBuffer) {
        super.encode(buffer);

        buffer.writeUInt32(this.numUpdatesSynced);
    }

    public decode(buffer: NetworkBuffer) {
        super.decode(buffer);

        this.numUpdatesSynced = buffer.readUInt32();
    }
}

export class UpdateOperationStopPacket extends BasePacket {
    public version: number;

    public constructor() {
        super();

        this.packetType = PacketType.UpdateOperationStop;
    }

    public encode(buffer: NetworkBuffer) {
        super.encode(buffer);

        buffer.writeUInt32(this.version);
    }

    public decode(buffer: NetworkBuffer) {
        super.decode(buffer);

        this.version = buffer.readUInt32();
    }
}

export class UpdateOperationUpdateBurstPacket extends BasePacket {
    public updates: IdbUpdatePacket[];

    public constructor() {
        super();

        this.packetType = PacketType.UpdateOperationUpdateBurst;
    }

    public encode(buffer: NetworkBuffer) {
        super.encode(buffer);

        buffer.writeUInt8(this.updates.length);
        this.updates.forEach(update => {
            let initialSize: number = buffer.getSize();
            update.encode(buffer);

            update.packetSize = buffer.getSize() - initialSize;
            buffer.buffer.writeUInt16LE(update.packetSize, initialSize);
        });
    }

    public decode(buffer: NetworkBuffer) {
        throw "not implemented";
    }
}