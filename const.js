function Const(){
    // Register address
  	 this.MHD_R = 0x2B;
  this.	 NHD_R = 0x2C;
  this.	 NCL_R = 0x2D;
  this.	 FDL_R = 0x2E;
this.  	 MHD_F = 0x2F;
  	this. NHD_F = 0x30;
  	 this.NCL_F = 0x31;
  	 this.FDL_F = 0x32;
  	 this.ELE0_T = 0x41;
  	 this.ELE0_R = 0x42;
  	 this.ELE1_T = 0x43;
  	 this.ELE1_R = 0x44;
  	 this.ELE2_T = 0x45;
  	 this.ELE2_R = 0x46;
  	 this.ELE3_T = 0x47;
  	 this.ELE3_R = 0x48;
  	 this.ELE4_T = 0x49;
  	 this.ELE4_R = 0x4A;
  	 this.ELE5_T = 0x4B;
  	 this.ELE5_R = 0x4C;
  	 this.ELE6_T = 0x4D;
  	 this.ELE6_R = 0x4E;
  	 this.ELE7_T = 0x4F;
  	 this.ELE7_R = 0x50;
  	 this.ELE8_T = 0x51;
  	 this.ELE8_R = 0x52;
  	 this.ELE9_T = 0x53;
  	 this.ELE9_R = 0x54;
  	 this.ELE10_T = 0x55;
  	 this.ELE10_R = 0x56;
  	 this.ELE11_T = 0x57;
  	 this.ELE11_R = 0x58;
  	 this.ELE12_T = 0x59;
  	 this.ELE12_R = 0x5A;

  	 this.FIL_CFG = 0x5D;
  	 this.ELE_CFG = 0x5E;
  	 this.GPIO_CTRL0 = 0x73;
  	 this.GPIO_CTRL1 = 0x74;
  	 this.GPIO_DATA = 0x75;
  	 this.GPIO_DIR = 0x76;
  	 this.GPIO_EN = 0x77;
  	 this.GPIO_SET = 0x78;
  	 this.GPIO_CLEAR = 0x79;
  	 this.GPIO_TOGGLE = 0x7A;
  	 this.ATO_CFG0 = 0x7B;
  	 this.ATO_CFGU = 0x7D;
  	 this.ATO_CFGL = 0x7E;
  	 this.ATO_CFGT = 0x7F;

  	// Global Constants
  	this.TOU_THRESH = 0x06;
      this.REL_THRESH = 0x0A;
};

module.exports = Const;
