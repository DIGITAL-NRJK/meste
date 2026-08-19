import { Fragment } from 'react'

type SignatureBandProps = {
  words: string[]
}

export function SignatureBand({ words }: SignatureBandProps) {
  return (
    <div className="meste-signature-band">
      {words.map((word, index) => (
        <Fragment key={word}>
          {index > 0 ? <span aria-hidden="true" className="meste-diamond" /> : null}
          <span>{word}</span>
        </Fragment>
      ))}
    </div>
  )
}
