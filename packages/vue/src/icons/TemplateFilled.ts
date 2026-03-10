// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import TemplateFilledSvg from '@colelab/icons-svg/es/asn/TemplateFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'TemplateFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: TemplateFilledSvg }, slots);
  },
});
