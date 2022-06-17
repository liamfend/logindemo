const pluralProcessor = {
  type: 'postProcessor',
  name: 'plural',
  process(value, _, options, translator) {
    const trans = value.split('|')
    if (trans.length !== 3) {
      return value
    }

    if (typeof options.postProcessCount === 'undefined') {
      return value
    }

    const [zeroValue, singleValue, multiplyValue] = trans.map((tran) =>
      tran.replace(/\{0\}|\{1\}|\]1,Inf\]|\[1,Inf\]/g, '')
    )

    const newOptions = { ...{}, ...options }
    if (typeof newOptions.postProcess === 'string') {
      delete newOptions.postProcess
    } else {
      const index = newOptions.postProcess.indexOf('interval') // <-- Not supported in <IE9
      if (index !== -1) newOptions.postProcess.splice(index, 1)
    }

    if (options.postProcessCount === 0) {
      return translator.translate(zeroValue, options)
    }

    if (options.postProcessCount === 1) {
      return translator.translate(singleValue, options)
    }

    if (options.postProcessCount > 1) {
      return translator.translate(multiplyValue, options)
    }

    return value
  },
}

export default pluralProcessor
