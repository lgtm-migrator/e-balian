import { Injectable, Inject } from '@nestjs/common';
import {Robot} from './robot';
import { CrawlService } from 'src/crawl/crawl.service';

@Injectable()
export class RobotService {
    @Inject('ROBOT')
    private readonly robot: Robot
    getBotMessage(message) {
        return this.robot.getReply('adi', message)
    }
}