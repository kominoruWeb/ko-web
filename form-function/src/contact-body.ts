import { IsString, Length, IsEmail, IsPhoneNumber, IsIn, IsArray, IsBoolean, validateSync, IsOptional } from 'class-validator';

export const prefectures = ['北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県', '茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県', '新潟県', '富山県', '石川県', '福井県', '山梨県', '長野県', '岐阜県', '静岡県', '愛知県', '三重県', '滋賀県', '京都府', '大阪府', '兵庫県', '奈良県', '和歌山県', '鳥取県', '島根県', '岡山県', '広島県', '山口県', '徳島県', '香川県', '愛媛県', '高知県', '福岡県', '佐賀県', '長崎県', '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県', '海外'] as const
export type Prefecture = typeof prefectures[number]

export class ContactBody {
  @IsString()
  @Length(1, 100)
  name: string;

  // @IsEmail()
  @IsString()
  @Length(1, 256)
  email: string;

  // @IsPhoneNumber('JP')
  @IsString()
  @Length(1, 256)
  phoneNumber: string;

  @IsIn(prefectures)
  @IsOptional()
  site: Prefecture | null

  @IsArray()
  @IsString({each: true})
  @Length(1, 256, {each: true})
  requests: string[]

  @IsBoolean()
  @IsOptional()
  hasLand: boolean | null

  @IsString()
  @Length(1, 4096)
  text: string

  @IsString()
  @Length(2, 2)
  language: string;
  
  constructor(body: any){
    Object.assign(this, body)
    const errors = validateSync(this, {forbidUnknownValues: true})
    if(errors.length > 0) {
      throw errors
    }
  }
}