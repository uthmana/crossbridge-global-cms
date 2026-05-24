'use client'
import type { FormFieldBlock, Form as FormType } from '@payloadcms/plugin-form-builder/types'

import { useRouter } from 'next/navigation'
import React, { useCallback, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import RichText from '@/components/RichText'
import { Button } from '@/components/ui/xbutton'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

import { fields } from './fields'
import { getClientSideURL } from '@/utilities/getURL'
import { Mail, MapPin, Phone, Send } from 'lucide-react'

type ContactInfoType = {
  id: string
  type: string
  label: string
  value: string
  href: string
}

export type FormBlockType = {
  blockName?: string
  blockType?: 'formBlock'
  enableIntro: boolean
  form: FormType
  introContent?: DefaultTypedEditorState
  contactInfo?: { items: Array<ContactInfoType> }
}

export const FormBlock: React.FC<
  {
    id?: string
  } & FormBlockType
> = (props) => {
  const {
    enableIntro,
    form: formFromProps,
    form: { id: formID, confirmationMessage, confirmationType, redirect, submitButtonLabel } = {},
    introContent,
    contactInfo,
  } = props

  const formMethods = useForm({
    defaultValues: formFromProps.fields,
  })
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = formMethods

  const [isLoading, setIsLoading] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState<boolean>()
  const [error, setError] = useState<{ message: string; status?: string } | undefined>()
  const router = useRouter()

  const onSubmit = useCallback(
    (data: FormFieldBlock[]) => {
      let loadingTimerID: ReturnType<typeof setTimeout>
      const submitForm = async () => {
        setError(undefined)

        const dataToSend = Object.entries(data).map(([name, value]) => ({
          field: name,
          value,
        }))

        // delay loading indicator by 1s
        loadingTimerID = setTimeout(() => {
          setIsLoading(true)
        }, 1000)

        try {
          const req = await fetch(`${getClientSideURL()}/api/form-submissions`, {
            body: JSON.stringify({
              form: formID,
              submissionData: dataToSend,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'POST',
          })

          const res = await req.json()

          clearTimeout(loadingTimerID)

          if (req.status >= 400) {
            setIsLoading(false)

            setError({
              message: res.errors?.[0]?.message || 'Internal Server Error',
              status: res.status,
            })

            return
          }

          setIsLoading(false)
          setHasSubmitted(true)

          if (confirmationType === 'redirect' && redirect) {
            const { url } = redirect

            const redirectUrl = url

            if (redirectUrl) router.push(redirectUrl)
          }
        } catch (err) {
          console.warn(err)
          setIsLoading(false)
          setError({
            message: 'Something went wrong.',
          })
        }
      }

      void submitForm()
    },
    [router, formID, redirect, confirmationType],
  )

  const contactInfoItems = contactInfo?.items || []

  const renderIcon = (type: string) => {
    if (type === 'email') return <Mail className="h-5 w-5" />
    if (type === 'phone') return <Phone className="h-5 w-5" />
    if (type === 'location') return <MapPin className="h-5 w-5" />

    return ''
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-soft">
      <div className="container-px mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Contact
          </span>
          <div className="richtext-contact">
            {enableIntro && introContent && !hasSubmitted && (
              <RichText
                className="mb-8 lg:mb-12 richtext-contact"
                data={introContent}
                enableGutter={false}
              />
            )}

            <ul className="mt-10 space-y-5">
              {contactInfoItems?.map((item: ContactInfoType, i: number) => {
                return (
                  <li className="flex items-start gap-4" key={item.id}>
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                      {renderIcon(item.type)}
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-base font-semibold text-primary story-link"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p> {item.value}</p>
                      )}
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-8 shadow-card md:p-10">
          <FormProvider {...formMethods}>
            {!isLoading && hasSubmitted && confirmationType === 'message' && (
              <RichText
                data={confirmationMessage}
                className="bg-gradient-accent h-full prose md:prose-md [&_p]:leading-6 [&_h3]:text-2xl
                [&_h3]:font-bold [&_h3]:mb-1 text-accent-foreground py-5 rounded-xl"
              />
            )}

            {!hasSubmitted && (
              <form id={formID} onSubmit={handleSubmit(onSubmit)}>
                <h3 className="text-xl font-bold text-primary">Request a free consultation</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  No commitment. 100% confidential.
                </p>

                <div className="mb-4 mt-6 last:mb-0">
                  {formFromProps &&
                    formFromProps.fields &&
                    formFromProps.fields?.map((field, index) => {
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      const Field: React.FC<any> = fields?.[field.blockType as keyof typeof fields]
                      if (Field) {
                        return (
                          <div className="mb-6 last:mb-0" key={index}>
                            <Field
                              form={formFromProps}
                              {...field}
                              {...formMethods}
                              control={control}
                              errors={errors}
                              register={register}
                            />
                          </div>
                        )
                      }
                      return null
                    })}
                </div>

                <Button
                  form={formID}
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="mt-2 w-full cursor-pointer"
                  disabled={isLoading}
                >
                  {!isLoading && !hasSubmitted && (
                    <span className="flex items-center gap-3">
                      {submitButtonLabel} <Send className="h-5 w-5" />
                    </span>
                  )}
                  {isLoading && !hasSubmitted && (
                    <p className="text-center">Loading, please wait...</p>
                  )}
                </Button>
                <p className="text-center mt-3 text-xs text-muted-foreground">
                  By submitting you agree to our{' '}
                  <a href="/privacy-policy" className="hover:text-accent transition-base underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            )}
            {error && <div>{`${error.status || '500'}: ${error.message || ''}`}</div>}
          </FormProvider>
        </div>
      </div>
    </section>
  )
}
