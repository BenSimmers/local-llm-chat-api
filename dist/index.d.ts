import { type LanguageModel } from 'ai';
import { type Context } from 'hono';
import type { BlankEnv, BlankInput } from 'hono/types';
import MessageService from './messageService';
export declare const handleGetCompletions: (
  model: LanguageModel,
  messageService: MessageService,
) => (ctx: Context<BlankEnv, '/api/get-completions', BlankInput>) => Promise<
  | (Response &
      import('hono').TypedResponse<
        {
          error: string;
        },
        400,
        'json'
      >)
  | (Response &
      import('hono').TypedResponse<
        {
          userMessage: {
            role: 'user';
            content:
              | string
              | (
                  | {
                      type: 'text';
                      text: string;
                      providerOptions?:
                        | {
                            [x: string]: {
                              [x: string]: any;
                            };
                          }
                        | undefined;
                      experimental_providerMetadata?:
                        | {
                            [x: string]: {
                              [x: string]: any;
                            };
                          }
                        | undefined;
                    }
                  | {
                      type: 'image';
                      image:
                        | string
                        | {
                            readonly byteLength: number;
                            slice: {};
                            readonly maxByteLength: number;
                            readonly resizable: boolean;
                            resize: {};
                            readonly detached: boolean;
                            transfer: {};
                            transferToFixedLength: {};
                          }
                        | {
                            [x: number]: number;
                            readonly BYTES_PER_ELEMENT: number;
                            readonly buffer:
                              | {
                                  readonly byteLength: number;
                                  slice: {};
                                  readonly maxByteLength: number;
                                  readonly resizable: boolean;
                                  resize: {};
                                  readonly detached: boolean;
                                  transfer: {};
                                  transferToFixedLength: {};
                                }
                              | {
                                  readonly byteLength: number;
                                  slice: {};
                                  readonly growable: boolean;
                                  readonly maxByteLength: number;
                                  grow: {};
                                };
                            readonly byteLength: number;
                            readonly byteOffset: number;
                            copyWithin: {};
                            every: {};
                            fill: {};
                            filter: {};
                            find: {};
                            findIndex: {};
                            forEach: {};
                            indexOf: {};
                            join: {};
                            lastIndexOf: {};
                            readonly length: number;
                            map: {};
                            reduce: {};
                            reduceRight: {};
                            set: {};
                            slice: {};
                            some: {};
                            sort: {};
                            subarray: {};
                            includes: {};
                            at: {};
                            findLast: {};
                            findLastIndex: {};
                            toSorted: {};
                            with: {};
                          }
                        | {
                            type: 'Buffer';
                            data: number[];
                          };
                      mimeType?: string | undefined;
                      providerOptions?:
                        | {
                            [x: string]: {
                              [x: string]: any;
                            };
                          }
                        | undefined;
                      experimental_providerMetadata?:
                        | {
                            [x: string]: {
                              [x: string]: any;
                            };
                          }
                        | undefined;
                    }
                  | {
                      type: 'file';
                      data:
                        | string
                        | {
                            readonly byteLength: number;
                            slice: {};
                            readonly maxByteLength: number;
                            readonly resizable: boolean;
                            resize: {};
                            readonly detached: boolean;
                            transfer: {};
                            transferToFixedLength: {};
                          }
                        | {
                            [x: number]: number;
                            readonly BYTES_PER_ELEMENT: number;
                            readonly buffer:
                              | {
                                  readonly byteLength: number;
                                  slice: {};
                                  readonly maxByteLength: number;
                                  readonly resizable: boolean;
                                  resize: {};
                                  readonly detached: boolean;
                                  transfer: {};
                                  transferToFixedLength: {};
                                }
                              | {
                                  readonly byteLength: number;
                                  slice: {};
                                  readonly growable: boolean;
                                  readonly maxByteLength: number;
                                  grow: {};
                                };
                            readonly byteLength: number;
                            readonly byteOffset: number;
                            copyWithin: {};
                            every: {};
                            fill: {};
                            filter: {};
                            find: {};
                            findIndex: {};
                            forEach: {};
                            indexOf: {};
                            join: {};
                            lastIndexOf: {};
                            readonly length: number;
                            map: {};
                            reduce: {};
                            reduceRight: {};
                            set: {};
                            slice: {};
                            some: {};
                            sort: {};
                            subarray: {};
                            includes: {};
                            at: {};
                            findLast: {};
                            findLastIndex: {};
                            toSorted: {};
                            with: {};
                          }
                        | {
                            type: 'Buffer';
                            data: number[];
                          };
                      mimeType: string;
                      providerOptions?:
                        | {
                            [x: string]: {
                              [x: string]: any;
                            };
                          }
                        | undefined;
                      experimental_providerMetadata?:
                        | {
                            [x: string]: {
                              [x: string]: any;
                            };
                          }
                        | undefined;
                    }
                )[];
            providerOptions?:
              | {
                  [x: string]: {
                    [x: string]: any;
                  };
                }
              | undefined;
            experimental_providerMetadata?:
              | {
                  [x: string]: {
                    [x: string]: any;
                  };
                }
              | undefined;
          };
          aiResponses: (
            | {
                role: 'assistant';
                content:
                  | string
                  | (
                      | {
                          type: 'text';
                          text: string;
                          providerOptions?:
                            | {
                                [x: string]: {
                                  [x: string]: any;
                                };
                              }
                            | undefined;
                          experimental_providerMetadata?:
                            | {
                                [x: string]: {
                                  [x: string]: any;
                                };
                              }
                            | undefined;
                        }
                      | {
                          type: 'reasoning';
                          text: string;
                          signature?: string | undefined;
                          providerOptions?:
                            | {
                                [x: string]: {
                                  [x: string]: any;
                                };
                              }
                            | undefined;
                          experimental_providerMetadata?:
                            | {
                                [x: string]: {
                                  [x: string]: any;
                                };
                              }
                            | undefined;
                        }
                      | {
                          type: 'redacted-reasoning';
                          data: string;
                          providerOptions?:
                            | {
                                [x: string]: {
                                  [x: string]: any;
                                };
                              }
                            | undefined;
                          experimental_providerMetadata?:
                            | {
                                [x: string]: {
                                  [x: string]: any;
                                };
                              }
                            | undefined;
                        }
                      | {
                          type: 'tool-call';
                          toolCallId: string;
                          toolName: string;
                          args: never;
                          providerOptions?:
                            | {
                                [x: string]: {
                                  [x: string]: any;
                                };
                              }
                            | undefined;
                          experimental_providerMetadata?:
                            | {
                                [x: string]: {
                                  [x: string]: any;
                                };
                              }
                            | undefined;
                        }
                    )[];
                providerOptions?:
                  | {
                      [x: string]: {
                        [x: string]: any;
                      };
                    }
                  | undefined;
                experimental_providerMetadata?:
                  | {
                      [x: string]: {
                        [x: string]: any;
                      };
                    }
                  | undefined;
              }
            | {
                role: 'tool';
                content: {
                  type: 'tool-result';
                  toolCallId: string;
                  toolName: string;
                  result: never;
                  experimental_content?:
                    | (
                        | {
                            type: 'text';
                            text: string;
                          }
                        | {
                            type: 'image';
                            data: string;
                            mimeType?: string | undefined;
                          }
                      )[]
                    | undefined;
                  isError?: boolean | undefined;
                  providerOptions?:
                    | {
                        [x: string]: {
                          [x: string]: any;
                        };
                      }
                    | undefined;
                  experimental_providerMetadata?:
                    | {
                        [x: string]: {
                          [x: string]: any;
                        };
                      }
                    | undefined;
                }[];
                providerOptions?:
                  | {
                      [x: string]: {
                        [x: string]: any;
                      };
                    }
                  | undefined;
                experimental_providerMetadata?:
                  | {
                      [x: string]: {
                        [x: string]: any;
                      };
                    }
                  | undefined;
              }
          )[];
        },
        import('hono/utils/http-status').ContentfulStatusCode,
        'json'
      >)
  | (Response &
      import('hono').TypedResponse<
        {
          error: string;
        },
        500,
        'json'
      >)
>;
