<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <div class="anchorContainer">
      <xsl:for-each select="urlset/url">
        <a href="{loc}">
          <xsl:value-of select="loc"/>
        </a>
      </xsl:for-each>
    </div>
  </xsl:template>
</xsl:stylesheet>