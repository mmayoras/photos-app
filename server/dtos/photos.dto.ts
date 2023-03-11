import { IsInt, IsString, ValidateNested } from 'class-validator';

export class PhotoResourceDto {
  @IsInt()
  public id: number;

  @IsInt()
  public width: number;

  @IsInt()
  public height: number;

  @IsString()
  public url: string;
  
  @IsString()
  public photographer: string;
  
  @IsString()
  public photographer_url: string;
  
  @IsInt()
  public photographer_id: number;

  @IsString()
  public avg_color: string;

  @ValidateNested()
  public src: PhotoSrcDto;
  
  @IsString()
  public alt: string;
}

class PhotoSrcDto {
    @IsString()
    public original: string;
    
    @IsString()
    public large: string;
    
    @IsString()
    public large2x: string;
    
    @IsString()
    public medium: string;
    
    @IsString()
    public small: string;
    
    @IsString()
    public portrait: string;
    
    @IsString()
    public landscape: string;
    
    @IsString()
    public tiny: string;
}
