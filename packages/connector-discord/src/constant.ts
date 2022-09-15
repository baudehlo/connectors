import { ConnectorMetadata, ConnectorPlatform } from '@logto/connector-core';

/**
 * Base authorization URL.
 * https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-urls
 */
export const authorizationEndpoint = 'https://discord.com/oauth2/authorize';

/**
 * Discord exposes different versions of the API, You should specify which version to use by including it in your requests.
 * https://discord.com/developers/docs/reference#api-reference
 */
export const accessTokenEndpoint = 'https://discord.com/api/v10/oauth2/token';
export const userInfoEndpoint = 'https://discord.com/api/v10/users/@me';

/**
 * OAuth2 Scopes
 * https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes
 */
export const scope = 'identify email';

export const defaultMetadata: ConnectorMetadata = {
  id: 'discord-universal',
  target: 'discord',
  platform: ConnectorPlatform.Universal,
  name: {
    en: 'Discord',
  },
  logo: './logo.svg',
  logoDark: null,
  description: {
    en: 'Discord is the easiest way to talk over voice, video, and text.',
    // Dependencies not updated to latest v1.0.0-beta.9, remove these comments later
    // 'pt-PT': 'Discord é a forma mais fácil de comunicar por voz, vídeo e texto.',
    'zh-CN': 'Discord is the easiest way to talk over voice, video, and text.', // UNTRANSLATED
    'tr-TR': 'Discord, sesli, görüntülü ve metin üzerinden konuşmanın en kolay yoludur.',
    'ko-KR': 'Discord는 음성, 비디오 및 텍스트로 대화하는 가장 쉬운 방법입니다.',
  },
  readme: './README.md',
  configTemplate: './docs/config-template.json',
};

export const defaultTimeout = 5000;
