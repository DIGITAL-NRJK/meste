'use client'

import { useActionState, useEffect, useId, useRef } from 'react'

import { submitQuote } from '@/actions/submitQuote'
import type { Locale } from '@/lib/i18n/config'
import type { QuotePageData } from '@/lib/pages/quote/types'
import { initialQuoteState, type QuoteFieldName } from '@/lib/quote/schema'

type QuoteFormProps = {
  data: QuotePageData
  locale: Locale
}

export function QuoteForm({ data, locale }: QuoteFormProps) {
  const [state, formAction, isPending] = useActionState(submitQuote, initialQuoteState)
  const summaryRef = useRef<HTMLDivElement>(null)
  const successRef = useRef<HTMLDivElement>(null)
  const stampRef = useRef<HTMLInputElement>(null)
  const prefix = useId()

  const { content, consent } = data
  const { form, errors: errorCopy } = content

  const fieldId = (field: string) => `${prefix}-${field}`
  const errorId = (field: string) => `${prefix}-${field}-error`
  const hintId = (field: string) => `${prefix}-${field}-hint`

  const message = (field: QuoteFieldName | 'form'): string | null => {
    const code = state.errors[field]
    return code ? (errorCopy.codes[code] ?? errorCopy.codes.unknown) : null
  }

  const describedBy = (field: QuoteFieldName): string | undefined => {
    const parts = [form.hints[field] ? hintId(field) : null, message(field) ? errorId(field) : null]
    const value = parts.filter(Boolean).join(' ')
    return value === '' ? undefined : value
  }

  // Written after mount, so a visitor without JavaScript simply has no stamp
  // and the server skips the timing check rather than discarding their request.
  useEffect(() => {
    if (stampRef.current) {
      stampRef.current.value = String(Date.now())
    }
  }, [state])

  // Move attention to whichever outcome the submission produced.
  useEffect(() => {
    if (state.status === 'error') {
      summaryRef.current?.focus()
    }

    if (state.status === 'success') {
      successRef.current?.focus()
    }
  }, [state])

  if (state.status === 'success') {
    return (
      <div className="meste-quote-success" ref={successRef} role="status" tabIndex={-1}>
        <h2 className="meste-heading meste-quote-success__title">{content.success.heading}</h2>
        <p className="meste-quote-success__body">{content.success.body}</p>
        <p className="meste-quote-success__note">{content.success.note}</p>
      </div>
    )
  }

  const formError = message('form')
  const summarised: QuoteFieldName[] = [
    'name',
    'email',
    'phone',
    'guestCount',
    'eventDate',
    'consent',
  ]
  const fieldErrors = summarised.flatMap((field) => {
    const text = message(field)
    return text ? [{ field, text }] : []
  })

  const text = (field: QuoteFieldName) => state.values[field] ?? ''

  return (
    <form action={formAction} className="meste-quote-form" noValidate>
      <input name="locale" type="hidden" value={locale} />
      <input defaultValue="" name="renderedAt" ref={stampRef} type="hidden" />

      {/* Not shown to anyone; anything typed here came from a machine. */}
      <div aria-hidden="true" className="meste-visually-hidden">
        <label htmlFor={fieldId('company_position')}>Do not fill this field</label>
        <input
          autoComplete="off"
          defaultValue=""
          id={fieldId('company_position')}
          name="company_position"
          tabIndex={-1}
          type="text"
        />
      </div>

      {formError || fieldErrors.length > 0 ? (
        <div className="meste-form-summary" ref={summaryRef} role="alert" tabIndex={-1}>
          <p className="meste-form-summary__title">{errorCopy.summaryHeading}</p>
          {formError ? <p className="meste-form-summary__body">{formError}</p> : null}
          {fieldErrors.length > 0 ? (
            <ul>
              {fieldErrors.map((entry) => (
                <li key={entry.field}>
                  <a href={`#${fieldId(entry.field)}`}>
                    {form.labels[entry.field]} — {entry.text}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}

      <fieldset className="meste-fieldset">
        <legend className="meste-fieldset__legend">{form.essentialsHeading}</legend>

        {(['name', 'email', 'phone'] as const).map((field) => (
          <div className="meste-field" key={field}>
            <label htmlFor={fieldId(field)}>
              {form.labels[field]} <span className="meste-field__flag">{form.requiredHint}</span>
            </label>
            {form.hints[field] ? (
              <p className="meste-field__hint" id={hintId(field)}>
                {form.hints[field]}
              </p>
            ) : null}
            <input
              aria-describedby={describedBy(field)}
              aria-invalid={message(field) ? true : undefined}
              autoComplete={field === 'name' ? 'name' : field === 'email' ? 'email' : 'tel'}
              defaultValue={text(field)}
              id={fieldId(field)}
              name={field}
              required
              type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
            />
            {message(field) ? (
              <p className="meste-field__error" id={errorId(field)}>
                {message(field)}
              </p>
            ) : null}
          </div>
        ))}

        {(['eventType', 'eventDate', 'location', 'guestCount'] as const).map((field) => (
          <div className="meste-field" key={field}>
            <label htmlFor={fieldId(field)}>
              {form.labels[field]} <span className="meste-field__flag">{form.optionalSuffix}</span>
            </label>
            {form.hints[field] ? (
              <p className="meste-field__hint" id={hintId(field)}>
                {form.hints[field]}
              </p>
            ) : null}
            <input
              aria-describedby={describedBy(field)}
              aria-invalid={message(field) ? true : undefined}
              defaultValue={text(field)}
              id={fieldId(field)}
              inputMode={field === 'guestCount' ? 'numeric' : undefined}
              min={field === 'guestCount' ? 1 : undefined}
              name={field}
              type={field === 'eventDate' ? 'date' : field === 'guestCount' ? 'number' : 'text'}
            />
            {message(field) ? (
              <p className="meste-field__error" id={errorId(field)}>
                {message(field)}
              </p>
            ) : null}
          </div>
        ))}
      </fieldset>

      <details className="meste-details">
        <summary>
          <span className="meste-details__title">{form.detailsHeading}</span>
          <span className="meste-details__hint">{form.detailsHint}</span>
        </summary>

        <div className="meste-details__body">
          <div className="meste-field">
            <label htmlFor={fieldId('company')}>
              {form.labels.company} <span className="meste-field__flag">{form.optionalSuffix}</span>
            </label>
            <input
              defaultValue={text('company')}
              id={fieldId('company')}
              name="company"
              type="text"
            />
          </div>

          {data.formats.length > 0 ? (
            <div className="meste-field">
              <label htmlFor={fieldId('receptionFormat')}>
                {form.labels.receptionFormat}{' '}
                <span className="meste-field__flag">{form.optionalSuffix}</span>
              </label>
              <select
                defaultValue={text('receptionFormat')}
                id={fieldId('receptionFormat')}
                name="receptionFormat"
              >
                <option value="">—</option>
                {data.formats.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          ) : null}

          {data.services.length > 0 ? (
            <fieldset className="meste-fieldset meste-fieldset--inline">
              <legend className="meste-fieldset__legend">
                {form.labels.services}{' '}
                <span className="meste-field__flag">{form.optionalSuffix}</span>
              </legend>
              {data.services.map((option) => (
                <div className="meste-choice" key={option.value}>
                  <input
                    id={fieldId(`service-${option.value}`)}
                    name="services"
                    type="checkbox"
                    value={option.value}
                  />
                  <label htmlFor={fieldId(`service-${option.value}`)}>{option.label}</label>
                </div>
              ))}
            </fieldset>
          ) : null}

          {(['menuPreferences', 'dietaryRequirements', 'allergens', 'notes'] as const).map(
            (field) => (
              <div className="meste-field" key={field}>
                <label htmlFor={fieldId(field)}>
                  {form.labels[field]}{' '}
                  <span className="meste-field__flag">{form.optionalSuffix}</span>
                </label>
                {form.hints[field] ? (
                  <p className="meste-field__hint" id={hintId(field)}>
                    {form.hints[field]}
                  </p>
                ) : null}
                <textarea
                  aria-describedby={describedBy(field)}
                  defaultValue={text(field)}
                  id={fieldId(field)}
                  name={field}
                  rows={3}
                />
              </div>
            ),
          )}

          <div className="meste-field">
            <label htmlFor={fieldId('budget')}>
              {form.labels.budget} <span className="meste-field__flag">{form.optionalSuffix}</span>
            </label>
            {form.hints.budget ? (
              <p className="meste-field__hint" id={hintId('budget')}>
                {form.hints.budget}
              </p>
            ) : null}
            <input
              aria-describedby={describedBy('budget')}
              defaultValue={text('budget')}
              id={fieldId('budget')}
              name="budget"
              type="text"
            />
          </div>
        </div>
      </details>

      <div className="meste-choice meste-choice--consent">
        <input
          aria-describedby={message('consent') ? errorId('consent') : undefined}
          aria-invalid={message('consent') ? true : undefined}
          id={fieldId('consent')}
          name="consent"
          required
          type="checkbox"
        />
        <label htmlFor={fieldId('consent')}>{consent.statement}</label>
      </div>
      {message('consent') ? (
        <p className="meste-field__error" id={errorId('consent')}>
          {message('consent')}
        </p>
      ) : null}

      <button className="meste-button meste-button--solid" disabled={isPending} type="submit">
        {isPending ? form.submittingLabel : form.submitLabel}
      </button>
    </form>
  )
}
