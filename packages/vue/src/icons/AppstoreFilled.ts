// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AppstoreFilledSvg from '@colelab/icons-svg/es/asn/AppstoreFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AppstoreFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AppstoreFilledSvg }, slots);
  },
});
