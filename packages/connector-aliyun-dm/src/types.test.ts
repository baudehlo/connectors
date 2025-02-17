import { mockedConfig, mockedConfigWithAllRequiredTemplates } from './mock';
import { aliyunDmConfigGuard } from './types';

describe('aliyunDmConfigGuard', () => {
  it('throws when required templates not provided', () => {
    const result = aliyunDmConfigGuard.safeParse(mockedConfig);
    expect(result.success).toEqual(false);
  });

  it('passes when all required templated are presented', () => {
    const result = aliyunDmConfigGuard.safeParse(mockedConfigWithAllRequiredTemplates);
    expect(result.success).toEqual(true);
  });
});
