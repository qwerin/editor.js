import {BlockToolData} from '../tools';
import {MetaDataBlock} from './block-data';

/**
 * Output of one Tool
 */
export interface OutputBlockData {
  /**
   * Too type
   */
  type: string;
  /**
   * Saved Block data
   */
  data: BlockToolData;

  /**
   * MetaDataBlock;
   */
  metadata?: MetaDataBlock;
}

export interface OutputData {
  /**
   * Editor's version
   */
  version?: string;

  /**
   * Timestamp of saving in milliseconds
   */
  time?: number;

  /**
   * Saved Blocks
   */
  blocks: OutputBlockData[];

}
