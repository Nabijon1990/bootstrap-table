/**
 * Bootstrap Table Uzbek translation
 * Author: Nabijon Masharipov <mnabijonz@gmail.com>
 */

$.fn.bootstrapTable.locales['uz-Latn-UZ'] = {
  formatLoadingMessage () {
    return 'Yuklanyapti, iltimos kuting'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} qator har sahifada`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Ko'rsatypati ${pageFrom} dan ${pageTo} gacha ${totalRows} qatorlarni (filtered from ${totalNotFiltered} total rows)`
    }

    return `Ko'rsatypati ${pageFrom} dan ${pageTo} gacha ${totalRows} qatorlarni`
  },
  formatSRPaginationPreText () {
    return 'oldingi sahifa'
  },
  formatSRPaginationPageText (page) {
    return `${page}-sahifaga`
  },
  formatSRPaginationNextText () {
    return 'keyingi sahifa'
  },
  formatDetailPagination (totalRows) {
    return `${totalRows} ta qator ko\'rsatilayapti`
  },
  formatClearSearch () {
    return 'Filtrlarni tozalash'
  },
  formatSearch () {
    return 'Qidirish'
  },
  formatNoMatches () {
    return 'Hech narsa topilmadi'
  },
  formatPaginationSwitch () {
    return 'Sahifalashni yashirish/ko\'rsatish'
  },
  formatPaginationSwitchDown () {
    return 'Sahifalashni ko\'rsatish'
  },
  formatPaginationSwitchUp () {
    return 'Sahifalashni yashirish'
  },
  formatRefresh () {
    return 'Yangilash'
  },
  formatToggle () {
    return 'Ko\'rinish'
  },
  formatToggleOn () {
    return 'Kartochkali ko\'rinishni yoqish'
  },
  formatToggleOff () {
    return 'Kartochkali ko\'rinishni yashirish'
  },
  formatColumns () {
    return 'Ustunlar'
  },
  formatColumnsToggleAll () {
    return 'Hammasini ko\'rsatish'
  },
  formatFullscreen () {
    return 'Butun ekranga'
  },
  formatAllRows () {
    return 'Hammasi'
  },
  formatAutoRefresh () {
    return 'Avtomatik yangilash'
  },
  formatExport () {
    return 'Eksport'
  },
  formatJumpTo () {
    return 'BORISH'
  },
  formatAdvancedSearch () {
    return 'Maxsush qidiruv'
  },
  formatAdvancedCloseButton () {
    return 'Yopish'
  },
  formatFilterControlSwitch () {
    return 'Tugmalarni yashirish/ko\'rsatish'
  },
  formatFilterControlSwitchHide () {
    return 'Tugmalarni yashirish'
  },
  formatFilterControlSwitchShow () {
    return 'Tugmalarni ko\'rsatish'
  }
}

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['uz-Latn-UZ'])
